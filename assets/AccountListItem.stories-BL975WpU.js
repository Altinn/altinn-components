import{a7 as t,c as o}from"./iframe-DklMp8b9.js";import{S as s}from"./Handshake-CcqXH3rI.js";import{S as e}from"./Bell-BTfiKNvT.js";import{S as n}from"./Hashtag-DMrS5I6T.js";import{S as p}from"./Files-nedcqeNp.js";import{A as l}from"./AccountListItem-BZdchrdU.js";import{A as m}from"./AccountListItemDetails-BEUqdc6K.js";import{L as c}from"./List-CVcEBF4a.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-CrAQg8rM.js";import"./Input-DDvcPBDR.js";import"./Avatar-CX9IOnsl.js";import"./AvatarGroup-BeC5BXf9.js";import"./Badge-DxwSJzJK.js";import"./Tooltip-BmOBzKTd.js";import"./Heading-C5vDV6s5.js";import"./useHighlightedText-CQ5194gO.js";import"./ChevronUp-ImWxnNDU.js";import"./ChevronDown-C8-zew9t.js";import"./ChevronRight-D0aoAfw5.js";import"./HeartFill-DbiMma0H.js";import"./ContextMenu-gGcdLnQv.js";import"./useDropdownMenuController-DMmUICAl.js";import"./Dropdown-DhZusmq8.js";import"./SearchField-1BQmUb8n.js";import"./MagnifyingGlass-XA6lr3C7.js";import"./FieldBase-nXdK7v3U.js";import"./Typography-CuZWB-pA.js";import"./Field-Ba2e4qFa.js";import"./Label-BvOr9MHZ.js";import"./useMenu-Dcu-XksR.js";import"./MenuListItem-CtNgIUPP.js";import"./MenuListDivider-DdHQwvZL.js";import"./MenuListHeading-vYUhz8ky.js";import"./MenuItem-DGElsCwp.js";import"./ItemMedia-DvKDb3Qz.js";import"./Checkmark-BxHTLnPH.js";import"./ItemLabel-zm8XuDpe.js";import"./ItemControls-o8s7abF_.js";import"./InformationSquare-D2eEvTI2.js";import"./MenuElipsisHorizontal-BvtZk3Yv.js";import"./Section-DuAEz57j.js";import"./Flex-CsvoEycQ.js";import"./ButtonGroup-Vwrh_ftH.js";import"./Divider-C_Jo3wvY.js";import"./SettingsItem-ZrYnsd3w.js";import"./SettingsItemBase-DzHt0haO.js";import"./ItemBase-CSc5nv8o.js";import"./ItemLink-DZ5c6nF6.js";import"./SettingsModal-Cv0cYgwh.js";import"./ModalBody-r6-Hi5A7.js";import"./ButtonIcon-D6knLLc8.js";import"./ButtonLabel-Dr-psq7U.js";import"./AccountOrganization-DcORgSIK.js";import"./Byline-BE2tNCTu.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ut=["Default","Expanded"];export{r as Default,i as Expanded,ut as __namedExportsOrder,dt as default};
