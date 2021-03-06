import React from 'react';
import { Form } from 'react-final-form';

import Reference from '../Reference/Reference';
import Input from '../Input/Input';

import { UserData, FormData } from '../../types/userCard';
import { User } from '../../types/user';

import validate from '../../helpers/validate';
import validateName from '../../helpers/validateUserName';
import validateNameAndSurname from '../../helpers/validateNameAndSurname';
import validateEmail from '../../helpers/validateEmail';

import './userCard.scss';

type UserCardProps = {
  userData: User,
  readOnlyData: boolean
}

function UserCard(props: UserCardProps) {
  const {
    userData: {
      name,
      username,
      email,
      address: { street, city, zipcode },
      phone,
      website,
    },
    readOnlyData,
  } = props;

  const formParams: FormData = {
    name: {
      fieldName: 'name',
      placeholderValue: 'Name',
      validator: validateNameAndSurname,
      readOnly: readOnlyData,
    },
    userName: {
      fieldName: 'username',
      placeholderValue: 'User name',
      validator: validateName,
      readOnly: readOnlyData,
    },
    email: {
      fieldName: 'email',
      type: 'email',
      placeholderValue: 'E-mail',
      validator: validateEmail,
      readOnly: readOnlyData,
    },
    street: {
      fieldName: 'street',
      placeholderValue: 'Street',
      validator: validate,
      readOnly: readOnlyData,
    },
    city: {
      fieldName: 'city',
      placeholderValue: 'City',
      validator: validate,
      readOnly: readOnlyData,
    },
    zipcode: {
      fieldName: 'zipcode',
      placeholderValue: 'Zip code',
      validator: validate,
      readOnly: readOnlyData,
    },
    phone: {
      fieldName: 'phone',
      placeholderValue: 'Phone',
      validator: validate,
      readOnly: readOnlyData,
    },
    website: {
      fieldName: 'website',
      placeholderValue: 'Website',
      validator: validate,
      readOnly: readOnlyData,
    },
    comment: {
      fieldName: 'comment',
      placeholderValue: 'Comment',
      readOnly: readOnlyData,
      required: false,
      textarea: true,
    },
    onSubmit: (data: UserData) => console.log(data),
  };

  return (
    <div className="user-card">
      <Form
        onSubmit={formParams.onSubmit}
        initialValues={{
          name, username, email, street, city, zipcode, phone, website,
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="user-card__fields">
              <Input inputData={formParams.name} />
              <Input inputData={formParams.userName} />
              <Input inputData={formParams.email} />
              <Input inputData={formParams.street} />
              <Input inputData={formParams.city} />
              <Input inputData={formParams.zipcode} />
              <Input inputData={formParams.phone} />
              <Input inputData={formParams.website} />
              <Input inputData={formParams.comment} />
            </div>
            <div className="user-card__button">
              <Reference
                isButton
                buttonType="submit"
                disabled={readOnlyData}
                text="??????????????????"
                type="solid"
                bgColor="green"
              />
            </div>
          </form>
        )}
      </Form>
    </div>
  );
}

export default UserCard;
