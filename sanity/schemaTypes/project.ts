import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required().min(50).max(200)
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: Rule => Rule.required().min(2000).max(new Date().getFullYear())
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          {title: 'Website Development', value: 'Website Development'},
          {title: 'App Development', value: 'App Development'},
          {title: 'SEO', value: 'SEO'},
          {title: 'Digital Marketing', value: 'Digital Marketing'}
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'websiteLink',
      title: 'Website Link',
      type: 'url'
    }),
    defineField({
      name: 'content',
      title: 'About Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'text',
      description: 'What the client said about the project'
    })
  ]
}) 