import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../enums/AppRoute';

export const redirectToRoute = createAction<AppRoute | string>('redirectToRoute');
