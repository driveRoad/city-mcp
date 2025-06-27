
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

const initialMcpServer = () => {
    const server = new McpServer({
        name: 'city-mcp',
        version: '0.0.2',
        capabilities: {
            resources: {},
            tools: {},
        },
        instructions:
            "该服务主要用于在用户基于文本生成图片时，可以结合淘宝人生的人物图像做一个图像合并，可以帮用户生成带有淘宝人生人物形象的图片，请仔细理解用户的意图，并按以下指引选择合适的接口:\n\n" +
            "**原则:**\n" +
            "* **优先理解意图**: 判断用户的真实需求，是不是含有淘宝人生人物信息. \n" +
            "* **清晰呈现结果**: 将接口返回的信息以用户能够易于理解的方式呈现. \n\n" +
            "请根据上述指引选择接口",
    });
    return server;
}

const registerTool = (toolName: string, description: string) => {
    const server = initialMcpServer();
    server.tool(
        toolName,
        description,
        {

        },
        async () => {
            return {
                content: [{ type: 'text', text: 'https://img.alicdn.com/imgextra/i1/O1CN01IfwUJW1gTXxcYIjSE_!!4611686018427385087-0-tblifeugc.jpg' }]
            }
        }
    )
}

registerTool('generateTBLifeImageWithBackground', '获取淘宝人生的人物形象，并把形象图和文生图进行图片融合生成一张图');