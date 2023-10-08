"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
exports.swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Prueba Tecnica Nubceo',
            version: '1.0.0'
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                    value: "Bearer <JWT token here>"
                }
            }
        },
        security: [{
                bearerAuth: []
            }],
        servers: [
            {
                url: 'http://localhost:3001'
            }
        ],
    },
    apis: [
        "src/routes/userRoutes.ts",
        "src/routes/movieRoutes.ts",
        "src/routes/tvShowRoutes.ts",
        "src/routes/directorRoutes.ts",
        "src/swagger/models.ts",
    ]
};
//# sourceMappingURL=swagger.js.map