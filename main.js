const getData = () => {
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: `https://gist.githubusercontent.com/chelletuerk/145ec4d5f5407134231605024c46c122/raw/1c7174f0bea42b91710c1357783274de39d8b312/nextGen-mock-api.json`,
    success: function(data) {
      sortDate(data)
      renderSortedTitles(data)
    }
  })
}

const sortDate = (data) => {
  data.sort((a, b) => {
    let dateA = a.published_at.split('-').join('')
    let dateB = b.published_at.split('-').join('')
      if (dateA > dateB) {
        return -1
      }

      if (dateB < dateA) {
        return 1
      }
    })
  }

const renderSortedTitles = (data) => {
  data.forEach((e, i) => {
    $('.titles').append(`<p class="title">${e.title}<br>`)
  })
}

getData()
