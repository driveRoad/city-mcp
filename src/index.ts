import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';


const initialMcpServer = () => {
    const server = new McpServer({
        name: 'city-mcp',
        version: '1.0.0',
        capabilities: {
            resources: {},
            tools: {},
        },
        instructions:
            '该服务主要用于帮助用户查询城市热门景区'
    });
    return server;
}

const registerTool = (toolName: string, description: string, params: any) => {
    const server = initialMcpServer();
    server.tool(
        toolName,
        description,
        {

        },
        async () => {
            return {
                content: [{ type: 'text', text: 'hello world' }]
            }
        }
    )
}

registerTool('mcp-get-city-house', '获取城市房屋信息', {});