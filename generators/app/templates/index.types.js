/* <%= pkg %> <%= version %> */
import <%= name %>Types from './<%= name %>.graphql'
import stitchTypes from './_stitch.graphql'

export default [
  <%= name %>Types,
  stitchTypes
]
