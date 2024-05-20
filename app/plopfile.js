const fn = (plop) => {
  plop.setGenerator('basic', {
    description: 'this is a skeleton plopfile',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'controller name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'destination/{{name}}.js',
        templateFile: 'plop-templates/test.txt',
      },
    ],
  });
};

module.exports = fn;
