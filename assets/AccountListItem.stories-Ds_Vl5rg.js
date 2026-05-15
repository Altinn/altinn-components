import{j as t}from"./iframe-CZMLD2fe.js";import{S as a}from"./Handshake-CljNNzq_.js";import{S as e}from"./Bell-gRSHSOzF.js";import{S as s}from"./Hashtag-CtqGZ9Om.js";import{S as n}from"./Files-DoUTt0xG.js";import{A as p}from"./AccountListItem-wo6J4Pum.js";import{L as m}from"./List-DD7ggiIe.js";import{A as l}from"./AccountListItemDetails-CUTcBBNm.js";import{B as c}from"./Button-z0ZioQWK.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Dmu9AgSD.js";import"./ListItem-rMlRzJII.js";import"./index-iGjPLQV7.js";import"./Input-1NX1qonS.js";import"./input-okGdJMyY.js";import"./lite-DaUVFjkg.js";import"./XMark-BBRiAlI8.js";import"./Icon-CbE8dCFV.js";import"./Skeleton-D52MvI5U.js";import"./Avatar-DzGFAhDt.js";import"./AvatarGroup-sNwukvT8.js";import"./Badge-CuHz7XFr.js";import"./Tooltip-Cmq5kiMI.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BZH6UNTX.js";import"./Heading-5rlhad8Q.js";import"./useHighlightedText-CmlayFSP.js";import"./ChevronUp-C_Nv0CUA.js";import"./ChevronDown-Bjx7qU4A.js";import"./ChevronRight-7zRCvc5i.js";import"./HeartFill-Bo9xq64m.js";import"./ContextMenu-DZna9DPo.js";import"./useDropdownMenuController-Dm3dzHc4.js";import"./Dropdown-Bx0d8Qo_.js";import"./MenuElipsisHorizontal-C-D0tdFp.js";import"./SearchField-hPGSgF9W.js";import"./MagnifyingGlass-DMBns2Fc.js";import"./FieldBase-bsYRos9m.js";import"./Typography-BegW4Ytw.js";import"./Label-C0JPWrbN.js";import"./index-DZ8nICMn.js";import"./MenuListItem-DDLkxBzW.js";import"./MenuListHeading-BJ84Vv6-.js";import"./MenuItem-BQTFtYYp.js";import"./ItemMedia-CE_zTi22.js";import"./Checkmark-CgCD7cxb.js";import"./ItemControls-CSi2HZsx.js";import"./useMenu-CEG7UMF2.js";import"./index-CQNCMx5k.js";import"./InformationSquare-BauCIT4L.js";import"./Flex-oWhCvzqt.js";import"./Section-B1dSFwPq.js";import"./ButtonGroup-lppFG0T2.js";import"./Divider-B_OXeHdJ.js";import"./SettingsItem-uM6SM568.js";import"./SettingsItemBase-C4lOIklE.js";import"./ItemLink-D5-BdpwL.js";import"./SettingsModal-BPOEW54D.js";import"./ModalBody-COFFml6R.js";import"./ButtonIcon-BscAx0sF.js";import"./ButtonLabel-k_kFU7aM.js";import"./AccountOrganization-vWOwDQXf.js";import"./Byline-CqO2f5dT.js";import"./button-CZknkFMR.js";const ft={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(m,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const St=["Default","Expanded"];export{r as Default,i as Expanded,St as __namedExportsOrder,ft as default};
