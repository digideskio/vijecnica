<template src="./add-course-wizard.html"></template>
<style src="./add-course-wizard.css"></style>

<script>
import subjectsInput from '../subjects-input/subjects-input'
import gql from 'graphql-tag'
// import user from '../../lib/auth'
import { router } from '../../router'

const courseCreate = gql`
    mutation CreateCourse($course: CreateCourse) {
        course(course: $course) {
            id
        }
    }
`

export default {
    name: 'AddCourseWizard',
    data () {
        return {
            newCourse: {
                title: '',
                pitch: '',
                description: '',
                member_limit: 5,
                subjects: []
                // user: user.get().id
            }
        }
    },
    components: {
        subjectsInput
    },
    methods: {
        submit: function () {
            this.$apollo.mutate({
                mutation: courseCreate,
                variables: { course: this.newCourse }
            }).then(res => {
                router.push({ name: 'course', params: { id: res.data.course.id } })
            }).catch(res => {
                // eslint-disable-next-line no-undef, no-alert
                alert(`Error creating the course.\n ${res}`)
            })
        }
    }
}
</script>
