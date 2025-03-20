import express from 'express';

const app = express();
const port = 3000;

// Informational responses (100-199)
app.get('/api/continue', (req, res) => {
    res.status(200).send({
        simulatedStatus: 100,
        message: "Continue",
        info: "Note: 100 Continue is an interim response that cannot be directly simulated. In real applications, it's automatically handled during large request processing"
    });
});

app.get('/api/switching-protocols', (req, res) => {
    res.status(200).send({
        simulatedStatus: 101,
        message: 'Switching Protocols',
        info: 'Note: 101 Switching Protocols is typically used for WebSocket upgrades and cannot be directly simulated'
    });
});

app.get('/api/processing', (req, res) => {
    res.status(200).send({
        simulatedStatus: 102,
        message: 'Processing',
        info: 'Note: 102 Processing is an interim status that cannot be directly simulated. In real applications, it is used during long-running operations'
    });
});

app.get('/api/early-hints', (req, res) => {
    res.status(200).send({
        simulatedStatus: 103,
        message: 'Early Hints',
        info: 'Note: 103 Early Hints is used to send preliminary headers and cannot be directly simulated'
    });
});

app.get('/api/checkpoint', (req, res) => {
    res.status(200).send({
        simulatedStatus: 103,
        message: 'Checkpoint',
        info: 'Note: This is another use of 103 status code for resumable operations and cannot be directly simulated'
    });
});

// Successful responses (200-299)
app.get('/api/success', (req, res) => {
    res.status(200).send({
        status: 200,
        message: 'OK - Request successful'
    });
});

app.post('/api/created', (req, res) => {
    res.status(201).send({
        status: 201,
        message: 'Resource created successfully'
    });
});

app.get('/api/accepted', (req, res) => {
    res.status(202).send({
        status: 202,
        message: 'Request accepted for processing'
    });
});

app.get('/api/non-authoritative', (req, res) => {
    res.status(203).send({
        status: 203,
        message: 'Non-Authoritative Information',
        info: 'Response has been modified by a transforming proxy'
    });
});

app.get('/api/no-content', (req, res) => {
    res.status(204).send();  // 204 specifically should not return content
});

app.get('/api/reset-content', (req, res) => {
    res.status(205).send({
        status: 205,
        message: 'Reset Content',
        info: 'Reset the document view'
    });
});

// Redirection messages (300-399)
app.get('/api/temporary-redirect', (req, res) => {
    res.status(307).send({
        status: 307,
        message: 'Temporary redirect',
        redirectUrl: 'http://localhost:3000/api/success'
    });
});

app.get('/api/permanent-redirect', (req, res) => {
    res.status(308).send({
        status: 308,
        message: 'Permanent redirect',
        redirectUrl: 'http://localhost:3000/api/success'
    });
});

app.get('/api/multiple-choices', (req, res) => {
    res.status(300).send({
        status: 300,
        message: 'Multiple Choices',
        choices: [
            'http://localhost:3000/api/success',
            'http://localhost:3000/api/accepted'
        ]
    });
});

app.get('/api/see-other', (req, res) => {
    res.status(303).send({
        status: 303,
        message: 'See Other',
        redirectUrl: 'http://localhost:3000/api/success'
    });
});

app.get('/api/not-modified', (req, res) => {
    res.status(304).send({
        status: 304,
        message: 'Not Modified',
        info: 'Resource has not been modified since last request'
    });
});

// Client error responses (400-499)
app.get('/api/bad-request', (req, res) => {
    res.status(400).send({
        status: 400,
        message: 'Bad request - Invalid syntax'
    });
});

app.get('/api/unauthorized', (req, res) => {
    res.status(401).send({
        status: 401,
        message: 'Unauthorized - Authentication required'
    });
});

app.get('/api/forbidden', (req, res) => {
    res.status(403).send({
        status: 403,
        message: 'Forbidden - No access rights'
    });
});

app.get('/api/not-found', (req, res) => {
    res.status(404).send({
        status: 404,
        message: 'Resource not found'
    });
});

app.get('/api/payload-too-large', (req, res) => {
    res.status(413).send({
        status: 413,
        message: 'Payload Too Large',
        info: 'Request entity is larger than limits defined by server'
    });
});

// Server error responses (500-599)
app.get('/api/server-error', (req, res) => {
    res.status(500).send({
        status: 500,
        message: 'Internal server error'
    });
});

app.get('/api/not-implemented', (req, res) => {
    res.status(501).send({
        status: 501,
        message: 'Not implemented'
    });
});

app.get('/api/service-unavailable', (req, res) => {
    res.status(503).send({
        status: 503,
        message: 'Service temporarily unavailable'
    });
});

app.get('/api/gateway-timeout', (req, res) => {
    res.status(504).send({
        status: 504,
        message: 'Gateway Timeout',
        info: 'Server acting as gateway did not receive response in time'
    });
});

app.get('/api/version-not-supported', (req, res) => {
    res.status(505).send({
        status: 505,
        message: 'HTTP Version Not Supported',
        info: 'Server does not support the HTTP protocol version'
    });
});

// Enable JSON parsing middleware
app.use(express.json());

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
    console.log('\nAvailable endpoints:');
    console.log('1xx - Informational:');
    console.log('  GET /api/continue (100)');
    console.log('  GET /api/switching-protocols (101)');
    console.log('  GET /api/processing (102)');
    console.log('  GET /api/early-hints (103)');
    console.log('  GET /api/checkpoint (103)');
    console.log('\n2xx - Success:');
    console.log('  GET /api/success (200)');
    console.log('  POST /api/created (201)');
    console.log('  GET /api/accepted (202)');
    console.log('  GET /api/non-authoritative (203)');
    console.log('  GET /api/no-content (204)');
    console.log('  GET /api/reset-content (205)');
    console.log('\n3xx - Redirection:');
    console.log('  GET /api/multiple-choices (300)');
    console.log('  GET /api/see-other (303)');
    console.log('  GET /api/not-modified (304)');
    console.log('  GET /api/temporary-redirect (307)');
    console.log('  GET /api/permanent-redirect (308)');
    console.log('\n4xx - Client Error:');
    console.log('  GET /api/bad-request (400)');
    console.log('  GET /api/unauthorized (401)');
    console.log('  GET /api/forbidden (403)');
    console.log('  GET /api/not-found (404)');
    console.log('  GET /api/payload-too-large (413)');
    console.log('\n5xx - Server Error:');
    console.log('  GET /api/server-error (500)');
    console.log('  GET /api/not-implemented (501)');
    console.log('  GET /api/service-unavailable (503)');
    console.log('  GET /api/gateway-timeout (504)');
    console.log('  GET /api/version-not-supported (505)');
});