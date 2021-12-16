import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from 'yup'

class SearchBar extends Component {

  validationSchema = Yup.object().shape({
    query: Yup.string().min(1).required('You must specify a query for your search.'),
  })

  submit = (values, actions) => {
    this.props.fetchMovies(values).then(
      () => actions.setSubmitting(false)
    )
  }

  render () {
    return (
      <Formik
        initialValues={{query: '', language: 'en-US'}}
        onSubmit={this.submit}
        validationSchema={this.validationSchema}
      >
        {({
            handleSubmit,
            handleChange,
            handleBlur,
            isSubmitting
          }) => (
          <form onSubmit={handleSubmit} className="flex flex-row p-2 m-2">
            <input type="text" name="query" placeholder="Search..." onChange={handleChange} onBlur={handleBlur}
                   className="w-3/4 sm:flex-1 rounded px-3 py-2 border mr-2" />
            <select className="mr-2 border rounded" name="language" onChange={handleChange} onBlur={handleBlur}>
              <option value="en-US">EN</option>
              <option value="fr-FR">FR</option>
            </select>
            <button type="submit" disabled={isSubmitting} className="rounded px-3 py-2 text-white bg-green-500">
              Search
            </button>
          </form>
        )}
      </Formik>
    );
  }
}

export default SearchBar