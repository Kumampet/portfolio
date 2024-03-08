module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		"plugin:@typescript-eslint/recommended-requiring-type-checking"
	],
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script',
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
		'project': './tsconfig.json',
		'tsconfigRootDir': __dirname
	},
	'plugins': [
		'@typescript-eslint',
		'react',
		'prettier'
	],
	'rules': {
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'prettier/prettier': [
      'error',
      {
        'printWidth': 140,
        'tabWidth': 'tab',
        'useTabs': true,
        'semi': true,
        'singleQuote': true,
        'trailingComma': 'none',
        'bracketSpacing': true,
        'arrowParens': 'always'
      }
    ]
	},
	'ignorePatterns': [
		'**/*.js',
	]
};
