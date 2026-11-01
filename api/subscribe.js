export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const newSub = req.body;
  if (!newSub || !newSub.endpoint) {
    return res.status(400).json({ error: 'Invalid subscription' });
  }

  const GITHUB_TOKEN = process.env.GH_REPO_TOKEN;
  const REPO = 'JoshHarris822/Welsh_Word_OTD';
  const FILE_PATH = 'subscribers.json';

  try {
    // 1. Fetch current subscribers.json from GitHub API
    const getRes = await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json'
      }
    });

    const fileData = await getRes.json();
    const sha = fileData.sha;
    const content = Buffer.from(fileData.content, 'base64').toString('utf8');
    const subscribers = JSON.parse(content);

    // 2. Prevent duplicate entries
    const exists = subscribers.some(s => s.endpoint === newSub.endpoint);
    if (!exists) {
      subscribers.push(newSub);

      // 3. Commit updated subscribers.json back to GitHub
      await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
          Accept: 'application/vnd.github.v3+json'
        },
        body: JSON.stringify({
          message: 'Add new push subscriber',
          content: Buffer.from(JSON.stringify(subscribers, null, 2)).toString('base64'),
          sha: sha,
          branch: 'main'
        })
      });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Failed to save subscriber:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}