import render from '#/render';

describe('markdown-it tests', () => {
  let source, result;

  it('should initialize properly', async () => {
    expect(global.wrapper.text()).toEqual('');
  });

  it('should update with "<h2>Hello World!</h2>"', async () => {
    source = '## Hello World!';
    result = render(source);

    await global.wrapper.setProps({ source });
    expect(global.wrapper.html()).toContain(result);
  });
});
