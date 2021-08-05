module.exports = function (plop) {
    plop.setActionType('git add', function (answers, config, plop) {
        const execSync = require('child_process').execSync;
        return execSync('git add .', {
            encoding: 'utf-8',
        });
    });

    plop.setGenerator('Screen', {
        description: 'application screen logic',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'screen name please',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/pages/{{pascalCase name}}/index.tsx',
                templateFile: 'plop-templates/components.hbs',
            },
            {
                type: 'add',
                path: 'src/pages/{{pascalCase name}}/interfaces.ts',
                templateFile: 'plop-templates/interfaces.hbs',
            },
            {
                type: 'add',
                path: 'src/pages/{{pascalCase name}}/styles.ts',
                templateFile: 'plop-templates/styles.hbs',
            },
            {
                type: 'git add',
            },
        ],
    });
    plop.setGenerator('Component', {
        description: 'application component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'component name please',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/index.tsx',
                templateFile: 'plop-templates/components.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/interfaces.ts',
                templateFile: 'plop-templates/interfaces.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/styles.ts',
                templateFile: 'plop-templates/styles.hbs',
            },
            {
                type: 'git add',
            },
        ],
    });
    plop.setGenerator('Hook', {
        description: 'application component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'component name please',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/hooks/{{pascalCase name}}/index.tsx',
                templateFile: 'plop-templates/hooks.hbs',
            },
            {
                type: 'add',
                path: 'src/hooks/{{pascalCase name}}/interfaces.ts',
                templateFile: 'plop-templates/interfacesHooks.hbs',
            },
            {
                type: 'git add',
            },
        ],
    });
};
