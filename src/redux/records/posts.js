import { Record } from 'immutable';

export class PostsRecord extends Record({
    id: null,
    userId: null,
    title: null,
    body: null
}) { };