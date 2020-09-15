import render from '#/render';

describe('markdown-it-emoji tests', () => {
  let source, result;

  it('should be able to support emojis', async () => {
    source = ':tada:';
    result = render(source);

    await global.wrapper.setProps({ source });
    expect(global.wrapper.html()).toContain(result);
    expect(global.wrapper.text()).toEqual('🎉');
  });
});
