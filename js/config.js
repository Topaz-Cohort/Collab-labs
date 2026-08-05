// =========================================
// config.js
// =========================================

const isLocal =
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1";
    
export const config = {

    worker:{
        baseUrl: isLocal
        ? "http://localhost:8788"
        : "https://collablab-api.simplytobs.workers.dev"
    }

};
