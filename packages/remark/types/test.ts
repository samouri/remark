import remark = require('remark')

interface PluginOptions {
  example: boolean
}

const plugin = (options?: PluginOptions) => {}

remark().use(plugin)
remark().use(plugin, {example: true})
remark().use({settings: {commonmark: true}})
// $ExpectError
remark().use({settings: {doesNotExist: true}})
// $ExpectError
remark().use(plugin, {doesNotExist: 'true'})
