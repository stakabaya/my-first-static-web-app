// netlify/functions/oauth-callback.js - Teslaからのリダイレクトを処理 (Placeholder)

exports.handler = async (event, context) => {
    console.log('OAuth Callback Function Triggered');
    console.log('Received query parameters:', event.queryStringParameters);

    const code = event.queryStringParameters.code;
    const state = event.queryStringParameters.state;

    // ★★★ State検証ロジックをここに追加 ★★★
    console.log('Received code:', code);
    console.log('Received state:', state);

    if (!code) {
        // ... (エラー処理)
        return { statusCode: 400, body: 'Error: Authorization code missing.' };
    }

    // ★★★ トークン交換処理の実際のロジックをここに追加 ★★★
    // (詳細は前回の回答を参照)
    // const clientId = process.env.TESLA_CLIENT_ID;
    // const clientSecret = process.env.TESLA_CLIENT_SECRET;
    // ... fetch call to Tesla token endpoint ...

    // テスト段階での仮のレスポンス
    return {
        statusCode: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
        body: `<html><body><h1>Callback Received</h1><p>Code: ${code ? code.substring(0, 10) + '...' : 'N/A'}</p><p>State: ${state || 'N/A'}</p><p><b>重要:</b> Check Netlify Function logs for details.</p></body></html>`
    };
};