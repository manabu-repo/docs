const Request = () => {
  const icon = {
    default: 'x',
  };

  const getIcon = async (url, type, vm) => {
    if (icon[type]) {
      return icon[type];
    }

    await vm.axios.get(url).then(resp => {
      icon[type] = resp.data;
    });

    return icon[type];
  };
};
