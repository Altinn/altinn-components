var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a6 as t,c as p}from"./iframe-Cb83cNHz.js";import{S as l}from"./Handshake-CemO3eDa.js";import{S as a}from"./Bell-BY_iRMvG.js";import{S as m}from"./Hashtag-BaEnnZR8.js";import{S as c}from"./Files-BO2emw-8.js";import{A as g}from"./AccountListItem-DyRtMWHg.js";import{A as d}from"./AccountListItemDetails-DINR573o.js";import{L as u}from"./List-_fktTtX7.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-DCX5xInW.js";import"./Input-DdatSh7d.js";import"./Avatar-CO1wzsxc.js";import"./AvatarGroup-DvuSBfuR.js";import"./Badge-DGYSahl0.js";import"./Tooltip-Bacli5fs.js";import"./Heading-I2bz7uBQ.js";import"./useHighlightedText-DXF5vSCe.js";import"./ChevronUp-BCG2x0JT.js";import"./ChevronDown-CvYcy6of.js";import"./ChevronRight-C-6CVVq7.js";import"./HeartFill-DcdlCvlf.js";import"./ContextMenu-BmqCqerS.js";import"./useDropdownMenuController-Q85VC5Dx.js";import"./Dropdown-ANdQRx3c.js";import"./SearchField-HWu0obAx.js";import"./MagnifyingGlass-C02McN1l.js";import"./MenuListItem-Ddq1rF2u.js";import"./MenuListDivider-CU0QYw1K.js";import"./MenuItem-D8XMh2RI.js";import"./CheckboxUncheckedIcon-DNQ5ph0B.js";import"./RadioUncheckedIcon-CIyf3y8X.js";import"./ItemMedia-DqOX_qxk.js";import"./ItemLabel-BEqC8Tjb.js";import"./ItemControls-B2ksNOht.js";import"./FieldBase-DBBKjPwf.js";import"./Typography-BPADIB9F.js";import"./Field-SexvxzIl.js";import"./Label-CzmEce_d.js";import"./useMenu-D3abljbA.js";import"./InformationSquare-BiO92rri.js";import"./Section-ClBUDaq7.js";import"./Flex-mAUGJKsG.js";import"./ButtonGroup-BwzWu-pA.js";import"./Divider-79FwmztS.js";import"./SettingsItem-tnlpKRve.js";import"./SettingsItemBase-Cp8OCg29.js";import"./ItemBase-kQ84sUK4.js";import"./ItemLink-BQ17I7eJ.js";import"./SettingsModal-BNJ4T6iX.js";import"./ModalBody-CL-S6xSQ.js";import"./ButtonIcon-B4Ur9LKF.js";import"./ButtonLabel-DO3-EdGM.js";import"./AccountOrganization-DbMO5Q28.js";import"./Byline-CgRs6b_9.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},bt=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{r as Default,n as Expanded,bt as __namedExportsOrder,xt as default};
