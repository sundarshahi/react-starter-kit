import { useCallback, useEffect, useMemo, useReducer } from 'react';

import { resetTokens, setTokens } from '../authActionCreators/authActionCreators';
import { AuthContext } from '../authContext/AuthContext';
import { AuthContextValue } from '../authContext/AuthContext.types';
import { authReducer } from '../authReducer/authReducer';

import { useUser } from '@/app/hooks/useUser/useUser';
import { useMutation } from '@/react-query/hooks/useMutation/useMutation';
import { authStorage } from '@/services/storage/AuthStorage';
import { AuthContextControllerProps } from './AuthContextController.types';

export const AuthContextController = ({ children }: AuthContextControllerProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    accessToken: authStorage.accessToken,
    refreshToken: authStorage.refreshToken,
    expires: authStorage.expires,
  });

  const {
    data: user,
    isLoadingAndEnabled,
    isSuccess: isUserSuccess,
    isError,
    resetUser,
  } = useUser({
    enabled: !!state.accessToken,
  });

  const { mutateAsync: login, isPending: isAuthenticating } = useMutation('loginMutation', {
    onSuccess: (res) => {
      dispatch(
        setTokens({
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
          expires: res.expires,
        }),
      );
    },
    onError: () => {
      dispatch(resetTokens());
      resetUser();
    },
  });

  const logout = useCallback(() => {
    resetUser();
    dispatch(resetTokens());
  }, [resetUser]);

  useEffect(() => {
    if (isError) {
      dispatch(resetTokens());
    }
  }, [isError]);

  useEffect(() => {
    authStorage.accessToken = state.accessToken;
    authStorage.expires = state.expires;
    authStorage.refreshToken = state.refreshToken;
  }, [state]);

  const value: AuthContextValue = useMemo(
    () => ({
      ...state,
      isAuthenticating: isAuthenticating || isLoadingAndEnabled,
      isAuthenticated: isUserSuccess,
      login,
      logout,
      user,
    }),
    [state, isAuthenticating, isUserSuccess, isLoadingAndEnabled, login, logout, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
