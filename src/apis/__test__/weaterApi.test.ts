import { getWeatherByLatLon } from '../weatherApi';

describe('Test weather api', () => {
  it('Should response correct place', async () => {
    const res = await getWeatherByLatLon(19.4150109, -98.1410678);
    expect(res.name).toStrictEqual('Apizaco');
  });

  it('Should response worng latitute error', async () => {
    const res = await getWeatherByLatLon(6546546546546599, -1);
    expect(res).toStrictEqual({ cod: '400', message: 'wrong latitude' });
  });
});
