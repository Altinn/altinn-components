var n=Object.defineProperty;var a=(e,s)=>n(e,"name",{value:s,configurable:!0});import{a7 as t,c as p}from"./iframe-CW69B4-4.js";import{S as l}from"./Handshake-Bncb3LF_.js";import{S as o}from"./Bell-CmmHNQBr.js";import{S as m}from"./Hashtag-B8az7xD3.js";import{S as c}from"./Files-C838U7fT.js";import{A as g}from"./AccountListItem-BggtI9Sa.js";import{A as d}from"./AccountListItemDetails-Br7FDJOf.js";import{L as u}from"./List-RfjPrYOy.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-CLQ2Xgr8.js";import"./Input-BNHnVUMY.js";import"./Avatar-DlTYOJ9X.js";import"./AvatarGroup-C54_5QsB.js";import"./Badge-pUt1HWk8.js";import"./Tooltip-Bdo2x66E.js";import"./Heading-BlWFVsgQ.js";import"./useHighlightedText-Coh-oebD.js";import"./ChevronUp-BFUaosek.js";import"./ChevronDown-CiTeIiQR.js";import"./ChevronRight-CxFkThxw.js";import"./HeartFill-DkooJKuR.js";import"./ContextMenu-DeqMuVtu.js";import"./useDropdownMenuController-BBtpGQm9.js";import"./Dropdown-DTxBcaKX.js";import"./SearchField-LDFEPhQv.js";import"./MagnifyingGlass-JTPy69Hm.js";import"./MenuListItem-CMSm7sFe.js";import"./MenuListHeading-Cky4DZUO.js";import"./MenuItem-WxsEDNt-.js";import"./ItemMedia-zpQSTqxO.js";import"./Checkmark-BGDDfT19.js";import"./ItemLabel-BOWUd3uk.js";import"./ItemControls-Dz-gOQFJ.js";import"./FieldBase-Cx7I1cae.js";import"./Typography-CD2WmtRN.js";import"./Field-rkOFbQMU.js";import"./Label-DMxT2wjQ.js";import"./useMenu-bx75--uT.js";import"./MenuListDivider-C9vQ7MZ-.js";import"./InformationSquare-O6zrlrVZ.js";import"./MenuElipsisHorizontal-CWvkIr-a.js";import"./Section-DQYipFAJ.js";import"./Flex-CcbgemcX.js";import"./ButtonGroup-Bd6oXbKy.js";import"./Divider-DY5AwWgq.js";import"./SettingsItem-DcqRyeVx.js";import"./SettingsItemBase-BSHBMMog.js";import"./ItemBase-BB5MbWTj.js";import"./ItemLink-CAV-Z684.js";import"./SettingsModal-Csmc-w-c.js";import"./ModalBody-DjVjmbs2.js";import"./ButtonIcon-DDkKoEB2.js";import"./ButtonLabel-DwtT3aqm.js";import"./AccountOrganization-CWcTGxMX.js";import"./Byline-xzuOcDfP.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[e=>t.jsx(u,{children:t.jsx(e,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:o,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:o,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:a(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    expanded: true,
    interactive: false,
    children: <AccountListItemDetails settings={[{
      id: '1',
      title: 'Rolle og tilganger',
      value: 'Daglig leder',
      badge: {
        label: '4 tilganger'
      },
      icon: HandshakeIcon,
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på SMS',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Legg til'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på e-post',
      value: 'mathias@gmail.com',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Endre'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '3',
      title: 'Organisasjonsnummer',
      value: 'XXX XXX XXX',
      icon: HashtagIcon,
      as: 'button',
      onClick: () => alert('Org nr. ble kopiert'),
      controls: <Button as="div" size="xs" variant="ghost">
                <FilesIcon />
                <span>Kopier org. nr</span>
              </Button>
    }]} organization={[{
      title: 'Diaspora Bergensis',
      description: 'Org nr. 928914038',
      avatar: {
        type: 'company',
        name: 'Diaspora Bergensis'
      },
      selected: true,
      items: [{
        title: 'Diaspora Bergensis',
        description: 'Org nr. 928914038',
        avatar: {
          type: 'company',
          name: 'Diaspora Bergensis',
          variant: 'outline'
        }
      }]
    }]} />
  } as AccountListItemProps
}`,...i.parameters?.docs?.source}}};const Xt=["Default","Expanded"];export{r as Default,i as Expanded,Xt as __namedExportsOrder,xt as default};
