import { DocumentDefinition, FilterQuery } from 'mongoose';
import { omit } from 'lodash';
import User, { UserDocument } from '../model/user.model';

export async function createUser(input: DocumentDefinition<UserDocument>) {
    try {
        return await User.create(input);
    } catch (error) {
        console.log('Error when creating user');
        throw new Error(error);
    }
}

export async function findUser(query: FilterQuery<UserDocument>) {
    return User.findOne(query).lean();
}

export async function loginUser({ email, password }: { email: UserDocument['email']; password: string }) {
    const user = await User.findOne({ email });

    if (!user) {
        return false;
    }

    const isLoginValid = await user.comparePassword(password);

    if (isLoginValid) {
        return omit(user.toJSON(), 'password');
    }

    return false;
}
