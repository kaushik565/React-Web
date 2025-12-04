const fs = require('fs');
const path = require('path');

// Create out directory if it doesn't exist
const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

// Create a minimal routes-manifest.json for Vercel
const routesManifest = {
    version: 3,
    pages404: true,
    basePath: "",
    redirects: [],
    rewrites: {
        beforeFiles: [],
        afterFiles: [],
        fallback: []
    },
    headers: [],
    dynamicRoutes: [{
            page: "/",
            regex: "^/$"
        },
        {
            page: "/api/health",
            regex: "^/api/health/?$"
        }
    ],
    staticRoutes: [{
        page: "/_not-found",
        regex: "^/_not-found/?$"
    }],
    dataRoutes: [],
    i18n: undefined
};

fs.writeFileSync(
    path.join(outDir, 'routes-manifest.json'),
    JSON.stringify(routesManifest, null, 2)
);

console.log('✓ Generated routes-manifest.json in out/');