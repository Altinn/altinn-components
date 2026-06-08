import{a7 as t,c as o}from"./iframe-KbHODQgb.js";import{S as s}from"./Handshake-qK-_-t9_.js";import{S as e}from"./Bell-B1NfZyuE.js";import{S as n}from"./Hashtag-H-GroQhy.js";import{S as p}from"./Files-BhclPoqH.js";import{A as l}from"./AccountListItem-D_WpAwog.js";import{A as m}from"./AccountListItemDetails-Cid44XsV.js";import{L as c}from"./List-DEwsIv64.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-B8fUE1Gh.js";import"./Input-DwLHHyGz.js";import"./Avatar-DL544SyI.js";import"./AvatarGroup-CCjx5RK0.js";import"./Badge-MoiWNolG.js";import"./Tooltip-BDxQfQSw.js";import"./Heading-jxV4Y0yK.js";import"./useHighlightedText-uGguOCwY.js";import"./ChevronUp-DjGQTIt5.js";import"./ChevronDown-DDGA5gfO.js";import"./ChevronRight-wplb_UH2.js";import"./HeartFill-D_GdJ6TD.js";import"./ContextMenu-DeNRHsXv.js";import"./useDropdownMenuController-C2TGyR2O.js";import"./Dropdown-2MkuZ1sA.js";import"./SearchField-BOprvfZ0.js";import"./MagnifyingGlass-Db52e0Xc.js";import"./FieldBase-Vfg8qV6A.js";import"./Typography-C9K693Jo.js";import"./Field-B8zKs9Bz.js";import"./Label-C3jcdxRS.js";import"./useMenu-veT1adJt.js";import"./MenuListItem-D3mLd2IU.js";import"./MenuListHeading-BPNZa_yh.js";import"./MenuItem-BP2R6FfU.js";import"./ItemMedia-vwuqAhM8.js";import"./Checkmark-CO83o23q.js";import"./ItemLabel-BW6ywGNt.js";import"./ItemControls-BYcmr1lT.js";import"./index-DNTFCYRR.js";import"./InformationSquare-DCyKofJQ.js";import"./MenuElipsisHorizontal-CV5BoB6D.js";import"./Section-BQYKGPm8.js";import"./Flex-DJYB_We1.js";import"./ButtonGroup-D1R72gzy.js";import"./Divider-CbNMIzqf.js";import"./SettingsItem-Bnc2UwGo.js";import"./SettingsItemBase-DG21eKyz.js";import"./ItemBase-CTCHDdfF.js";import"./ItemLink-NIMU7q5y.js";import"./SettingsModal-_8PcUVyb.js";import"./ModalBody-BLUO0OyV.js";import"./ButtonIcon-J3Dvocxh.js";import"./ButtonLabel-S0TUviQT.js";import"./AccountOrganization-DlYhC-t8.js";import"./Byline-CQxYRlRU.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
