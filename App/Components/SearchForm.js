import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Content,
  Form,
  Input,
  Item,
  Label,
  Text,
} from 'native-base'
import {
  reduxForm,
  Field,
} from 'redux-form'

class SearchForm extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    artist: PropTypes.string,
    perPage: PropTypes.number,
  }

  _renderInput = ({
                    input,
                    label,
                    keyboardType,
                    meta: {touched, error, warning}
                  }) => {

    let hasError = false
    if (touched && error !== undefined) {
      hasError = true
    }
    return (
      <Content>
        <Item
          floatingLabel
          error={hasError}
        >
          <Label>{label}</Label>
          <Input
            {...input}
            keyboardType={keyboardType}
            onChangeText={(text) => input.onChange(text)}
          />
          {
            /*
            FIXME https://github.com/GeekyAnts/NativeBase/issues/1915
            hasError &&
            <Icon name="close-circle" />
            */
          }
        </Item>
        {
          hasError &&
          <Text style={{color: 'red'}}>{error}</Text>
        }
      </Content>
    )
  }

  render () {
        const {artist, perPage} = this.props
    return (
      <Form>
        <Field
          name="artist"
          component={this._renderInput}
          label="Artiste"
          value={artist}
        />
        <Field
          name="perPage"
          component={this._renderInput}
          label="Nombre d'occurences"
          keyboardType="numeric"
          value={perPage}
        />

        <Content padder>
          <Button
            block
            onPress={this.props.handleSubmit(this.props.onSubmit)}
          >
            <Text>Lancer la recherche</Text>
          </Button>
        </Content>
      </Form>
    )
  }
}

const validate = (values) => {
  const errors = {}
  if (!values.artist) {
    errors.artist = 'veuillez saisir un nom d\'artiste'
  }
  if (!values.perPage) {
    errors.perPage = 'veuillez saisir un nombre maxiumum d\'éléments à retourner'
  }
  return errors
}

export default reduxForm({
  form: 'searchEngineForm',
  validate,
})(SearchForm)
