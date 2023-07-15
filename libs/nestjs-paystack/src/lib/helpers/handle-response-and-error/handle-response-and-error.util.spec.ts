import { handleResponseAndError } from './handle-response-and-error.util';
import { AxiosError, AxiosResponse } from 'axios';
import { fromPartial } from '@total-typescript/shoehorn';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { of } from 'rxjs';
import { HttpException, HttpStatus } from '@nestjs/common';
import { PsFetchTransactionResponseModel } from '../../models';
import { getThrownError } from '../unit-test/unit-test.util';

describe(handleResponseAndError.name, () => {
  describe('successful response', () => {
    it('should return extracted response on success', () => {
      // Arrange
      const response: AxiosResponse<PsFetchTransactionResponseModel> =
        fromPartial({
          data: {
            status: true,
            message: 'Transaction retrieved',
            data: fromPartial({
              id: 2836566657,
              status: 'success',
              reference: '203520101',
              amount: 2000,
              gateway_response: 'Successful'
            })
          }
        });

      // Act
      const observerSpy = subscribeSpyTo(
        of(response).pipe(handleResponseAndError())
      );

      // Assert
      expect(observerSpy.getLastValue()).toEqual(response.data);
    });
  });
  describe('catch error', () => {
    it('should throw bad request error', () => {
      // Arrange
      const response: AxiosError<HttpException> = fromPartial({
        response: fromPartial({
          status: HttpStatus.BAD_REQUEST,
          data: fromPartial({
            message: 'bad request error'
          })
        })
      });

      //Act
      const observerSpy = getThrownError(response);

      // Assert
      expect(observerSpy.receivedError()).toBeTruthy();
      expect(observerSpy.getError().response.statusCode).toEqual(
        response.response?.status
      );
      expect(observerSpy.getError().response.message).toEqual(
        response.response?.data?.message
      );
    });

    it('should throw unauthorized error', () => {
      // Arrange
      const response: AxiosError<HttpException> = fromPartial({
        response: fromPartial({
          status: HttpStatus.UNAUTHORIZED,
          data: fromPartial({
            message: 'unauthorized error'
          })
        })
      });

      //Act
      const observerSpy = getThrownError(response);

      // Assert
      expect(observerSpy.receivedError()).toBeTruthy();
      expect(observerSpy.getError().response.statusCode).toEqual(
        response.response?.status
      );
      expect(observerSpy.getError().response.message).toEqual(
        response.response?.data?.message
      );
    });

    it('should throw not found error', () => {
      // Arrange
      const response: AxiosError<HttpException> = fromPartial({
        response: fromPartial({
          status: HttpStatus.NOT_FOUND,
          data: fromPartial({
            message: 'unauthorized error'
          })
        })
      });

      //Act
      const observerSpy = getThrownError(response);

      // Assert
      expect(observerSpy.receivedError()).toBeTruthy();
      expect(observerSpy.getError().response.statusCode).toEqual(
        response.response?.status
      );
      expect(observerSpy.getError().response.message).toEqual(
        response.response?.data?.message
      );
    });

    it('should throw internal server error', () => {
      // Arrange
      const response: AxiosError<HttpException> = fromPartial({
        response: fromPartial({
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          data: fromPartial({
            message: 'internal server error'
          })
        })
      });

      //Act
      const observerSpy = getThrownError(response);

      // Assert
      expect(observerSpy.receivedError()).toBeTruthy();
      expect(observerSpy.getError().response.statusCode).toEqual(
        response.response?.status
      );
      expect(observerSpy.getError().response.message).toEqual(
        response.response?.data?.message
      );
    });

    it('should throw error with custom message if no response data was provided', () => {
      // Arrange
      const response: AxiosError<HttpException> = fromPartial({
        response: fromPartial({
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          data: undefined
        })
      });

      //Act
      const observerSpy = getThrownError(response);

      // Assert
      expect(observerSpy.receivedError()).toBeTruthy();
      expect(observerSpy.getError().response.statusCode).toEqual(
        response.response?.status
      );
      expect(observerSpy.getError().message).toEqual(
        'Something went wrong. Please try again later.'
      );
    });
  });
});
