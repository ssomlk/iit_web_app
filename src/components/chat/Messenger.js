import MessengerCustomerChat from 'react-messenger-customer-chat';

function MessengerComponent({ lang }) {
    return (
        <div>
            <MessengerCustomerChat
            pageId={ lang == 'si-LK' ? "101103965543309" : "112660867532367"}
            appId="517179266738027"
            />
      </div>
    );
}

export default MessengerComponent;