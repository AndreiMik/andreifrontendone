<div class="container_top">
    <div class="left_part">
        <img class="logo_img" src="images/logo.png" alt="logo" title="logo">
        <div class="company">
            <p class="company_name">Company</p>
            <p class="company_name">name</p>
            <p class="p_best_company">The best company</p>
        </div>
    </div>
    <div class="right_part">
        <div class="phone">
            <p class="phone_number">+000(000)000-00-00</p>
            <p class="phone_number">+000(000)000-00-00</p>
            <p class="feedback">Feedback</p>
        </div>
    </div>
</div>
<div class="feedback_window" id="feedback_window">
    <img class="close" src="images/close.png">

    <p class="feedback_header">Feedback</p>

    <table class="feedback_table" id="feedback_table">
        <tr>
            <td> <p class="feedback_text">Your name *</p></td>
            <td> <input class="name_input" id="name_input" type="text"></td>
        </tr>
        <tr>
            <td> </td>
            <td><span class="error_form" id="name_error_message">Enter correctly name</span> </td>
        </tr>
        <tr>
            <td><p class="feedback_text">Phone number *</p></td>
            <td><input class="phone_input" id="phone_input" type="text"> </td>
        </tr>
        <tr>
            <td> </td>
            <td> <span class="error_form" id="phone_error_message">Enter correctly phone</span> </td>
        </tr>
        <tr>
            <td><p class="feedback_text">Email *</p></td>
            <td> <input class="email_input" id="email_input" type="text"> </td>
        </tr>
        <tr>
            <td></td>
            <td> <span class="error_form" id="email_error_message">Enter correctly email</span></td>
        </tr>
        <tr>
            <td> <p class="feedback_text" >Message</p></td>
            <td></td>
        </tr>
    </table>


    <textarea id="message_text" class="message_text" rows="3"cols="30"></textarea>

    <p class="mandatori_field" id="mandatori_field">* Required field</p>

    <button type="button" id="button_message" class="button_message">SEND</button>
    <p class="thanks" id="thanks">Thank you!</p>
</div>
<script src="js/feedback.js"></script>
<div class="menu_block" id="menu_block">
    <div class="menu_items" id="menu_items">
        <ul class="menu_ul">
            <li class="menu_li">Main page
                <ul class="submenu_1_ul">
                       <li>Item 1-1</li>
                       <li>Item 1-2</li>
                </ul>
            <li>|</li>
            </li>
            <li class="menu_li" id="catalog">Catalog
                <ul class="submenu_1_ul" id="submenu_1_ul">
                    <li>Cars</li>
                    <li id="household"> Appliances
                        <ul class="submenu_2_ul" id="submenu_2_ul">
                            <li>Microwaves</li>
                            <li>Refrigerators</li>
                            <li id="dishwasher">Dishwashers</li>
                            <li>Kettles</li>
                        </ul>
                   </li>
                    <li>Mobile Technology</li>
                    <li>Computers</li>
                    <li>Clothing</li>
                    <li>The property</li>
                </ul>
            </li>
            <li>|</li>
            <li class="menu_li">Delivery and payment
                <ul class="submenu_1_ul">
                           <li>Item 3-1</li>
                           <li>Item 3-2</li>
                </ul>
            </li>
            <li>|</li>
            <li class="menu_li">Prices
                <ul class="submenu_1_ul">
                            <li>Item 4-1</li>
                            <li>Item 4-2</li>
                </ul>
            </li>
            <li>|</li>
            <li class="menu_li">Contacts
                <ul class="submenu_1_ul">
                           <li>Item 5-1</li>
                           <li>Item 5-2</li>
                </ul>
            </li>
        </ul>

    </div>
</div>