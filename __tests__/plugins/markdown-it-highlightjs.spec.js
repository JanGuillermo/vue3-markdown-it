import render from '#/render';

describe('markdown-it-highlightjs tests', () => {
  let source, result;

  it('should be able to support highlighting', async () => {
    source = `
      \`\`\`
      this is code
      \`\`\`

      this isn't code
    `;
    result = render(source);

    await global.wrapper.setProps({ source });
    expect(global.wrapper.html()).toContain(result);
    expect(global.wrapper.html()).toContain('hljs');
  });
});
