const Notification = props => {
  const {src, notificationText, notificationColor} = props
  return (
    <div className={`notification ${notificationColor}`}>
      <img src={src} className='notification-icon' />
      <p className='notification-text'>{notificationText}</p>
    </div>
  )
}

const element = (
  <div className = "notification-container">
    <h1 className='main-heading'>Notifications</h1>
    <Notification
      src='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      notificationText='Information Message'
      notificationColor='primary-notification'
    />
    <Notification
      src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      notificationText='Success Message'
      notificationColor='success-notification'
    />
    <Notification
      src='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      notificationText='Warning Message'
      notificationColor='warning-notification'
    />
    <Notification
      src='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      notificationText='Danger Message'
      notificationColor='danger-notification'
    />
  </div>
)

const rootElement = document.getElementById('root')
rootElement.className = 'bg-container'

ReactDOM.render(element, rootElement)
