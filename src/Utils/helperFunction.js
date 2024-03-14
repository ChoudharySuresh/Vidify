export const formatViewCount = (count) => {
  if (count >= 1e6) {
    return `${(count / 1e6).toFixed(1)}M`;
  } else if (count >= 1e3) {
    return `${(count / 1e3).toFixed(0)}K`;
  } else {
    return count.toString();
  }
};

export const timeAgo = (dateString) => {
  const now = new Date();
  const pastDate = new Date(dateString);

  const timeDifference = now - pastDate;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const month = Math.floor(days / 30);
  const year = Math.floor(month / 12);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 30) {
    return `${days} days ago`;
  } else if (month < 12) {
    return `${month} months ago`;
  } else {
    return `${year} year ago`;
  }
};

export const formateCommentsCount = (commentCount) => {
  return new Intl.NumberFormat("en-IN").format(commentCount);
};

export const trucateText = (str, length, ending) => {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = "...";
  }

  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};
