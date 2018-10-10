const configAngular = require('@commitlint/config-angular')

const typeEnum = configAngular.rules['type-enum'][2]
typeEnum.push('chore')

module.exports = {
  extends: ['@commitlint/config-angular'],
}
