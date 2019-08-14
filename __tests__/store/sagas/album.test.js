import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '~/services/api';

import { searchSuccess, searchFailure } from '~/store/modules/album/actions';
import { search } from '~/store/modules/album/sagas';

const apiMock = new MockAdapter(api);

describe('Album saga', () => {
  const artist = {
    value: '1vCWHaC5f2uS3yhpwWbIA6',
    name: 'Avicii',
    color: '#7159c1',
  };
  it('should be able to fetch albums', async () => {
    const dispatch = jest.fn();
    const response = {
      href:
        'https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?offset=0&limit=50&include_groups=album,single,compilation,appears_on',
      items: [
        {
          album_group: 'album',
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/1vCWHaC5f2uS3yhpwWbIA6',
              },
              href: 'https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6',
              id: '1vCWHaC5f2uS3yhpwWbIA6',
              name: 'Avicii',
              type: 'artist',
              uri: 'spotify:artist:1vCWHaC5f2uS3yhpwWbIA6',
            },
          ],
          available_markets: [
            'AD',
            'AE',
            'AR',
            'AT',
            'AU',
            'BE',
            'BG',
            'BH',
            'BO',
            'BR',
            'CA',
            'CH',
            'CL',
            'CO',
            'CR',
            'CY',
            'CZ',
            'DE',
            'DK',
            'DO',
            'DZ',
            'EC',
            'EE',
            'EG',
            'ES',
            'FI',
            'FR',
            'GB',
            'GR',
            'GT',
            'HK',
            'HN',
            'HU',
            'ID',
            'IE',
            'IL',
            'IN',
            'IS',
            'IT',
            'JO',
            'JP',
            'KW',
            'LB',
            'LI',
            'LT',
            'LU',
            'LV',
            'MA',
            'MC',
            'MT',
            'MX',
            'MY',
            'NI',
            'NL',
            'NO',
            'NZ',
            'OM',
            'PA',
            'PE',
            'PH',
            'PL',
            'PS',
            'PT',
            'PY',
            'QA',
            'RO',
            'SA',
            'SE',
            'SG',
            'SK',
            'SV',
            'TH',
            'TN',
            'TR',
            'TW',
            'US',
            'UY',
            'VN',
            'ZA',
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/6Ad1E9vl75ZB3Ir87zwXIJ',
          },
          href: 'https://api.spotify.com/v1/albums/6Ad1E9vl75ZB3Ir87zwXIJ',
          id: '6Ad1E9vl75ZB3Ir87zwXIJ',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/5f4e25d0f16fed2bf3658efd771b1747c7b17e56',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/5e4cd8707e55a77f3b8b4bdcf6a463d42e8e9d9e',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/b047f985cb44e15dfd23dbbd87005667bb0243ac',
              width: 64,
            },
          ],
          name: 'TIM',
          release_date: '2019-06-06',
          release_date_precision: 'day',
          total_tracks: 12,
          type: 'album',
          uri: 'spotify:album:6Ad1E9vl75ZB3Ir87zwXIJ',
        },
      ],
    };

    apiMock.onGet(`/artists/${artist.value}/albums`).reply(200, response);

    await runSaga({ dispatch }, search, artist).toPromise();

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(searchSuccess(response));
  });

  it('should fail when api returns error', async () => {
    const dispatch = jest.fn();

    apiMock.onGet(`/artists/${artist.value}/albums`).reply(500);

    await runSaga({ dispatch }, search, artist).toPromise();

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(searchFailure());
  });
});
