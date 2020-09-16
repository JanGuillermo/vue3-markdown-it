import render from '#/render';

describe('markdown-it-task-lists tests', () => {
  let source, result;

  it('should be able to support task lists', async () => {
    source = `
- [ ] unchecked
- [x] checked
    `;
    result = render(source);

    await global.wrapper.setProps({ source });
    expect(global.wrapper.html()).toContain(result);
    expect(global.wrapper.html()).toContain('checkbox');
  });
});
