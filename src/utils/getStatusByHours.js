export default function getStatusByHours(hours) {
  const hoursStatus = [];
  const timeNow = new Date();

  const getDate = (date, hour, minutes) =>
    new Date(timeNow.getFullYear(), timeNow.getMonth(), date, hour, minutes, 0);

  const hoursValidNow = hours.filter(
    hour => hour.days.indexOf(timeNow.getDay() + 1) > -1
  );

  if (hoursValidNow.length === 0) {
    const nextDay = getDate(timeNow.getDate() + 1, 0, 0);

    const MILLISECONDS_TO_MIDNIGHT = nextDay.getTime() - timeNow.getTime();

    hoursStatus.push({
      status: false,
      timeToChange: MILLISECONDS_TO_MIDNIGHT
    });
  }

  if (hoursValidNow.length > 0) {
    hoursValidNow.forEach(hour => {
      const { from, to, days } = hour;

      const startHour = from.split(":");
      const endHour = to.split(":");

      const startTime = getDate(timeNow.getDate(), startHour[0], startHour[1]);

      const endTime = getDate(
        startHour[0] > endHour[0] ? timeNow.getDate() + 1 : timeNow.getDate(),
        endHour[0],
        endHour[1]
      );

      const isActiveNow =
        timeNow.getTime() >= startTime.getTime() &&
        timeNow.getTime() < endTime.getTime() &&
        days.indexOf(startTime.getDay() + 1) > -1;

      let timeToChange = null;

      if (isActiveNow) {
        timeToChange = endTime.getTime() - timeNow.getTime();
      }

      if (!isActiveNow) {
        const nowIsBeforeStart = timeNow.getTime() < startTime.getTime();

        const nowIsAfterEnd = timeNow.getTime() >= endTime.getTime();

        if (nowIsBeforeStart) {
          timeToChange = startTime.getTime() - timeNow.getTime();
        }

        if (nowIsAfterEnd) {
          const tomorrowTime = getDate(
            timeNow.getDate() + 1,
            startHour[0],
            startHour[1]
          );

          timeToChange = tomorrowTime.getTime() - timeNow.getTime();
        }
      }

      hoursStatus.push({ isActiveNow, timeToChange });
    });
  }

  const activeStatus = hoursStatus.find(hourStatus => hourStatus === true);

  if (activeStatus) return activeStatus;

  const closestHour = hoursStatus.reduce((closest, hourStatus) => {
    if (closest.timeToChange > hourStatus.timeToChange) {
      closest = hourStatus;
    }

    return closest;
  });

  return closestHour;
}
