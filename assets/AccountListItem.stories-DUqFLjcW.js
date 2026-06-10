import{a7 as t,c as o}from"./iframe-Da53zzTq.js";import{S as s}from"./Handshake-DGxo4EdO.js";import{S as e}from"./Bell-HCYSbBOR.js";import{S as n}from"./Hashtag-nwuOqi8D.js";import{S as p}from"./Files-X7ujCMJq.js";import{A as l}from"./AccountListItem-D2O9Yw9Q.js";import{A as m}from"./AccountListItemDetails-BuaHGOqK.js";import{L as c}from"./List-CC5ASBuj.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-y8d5EwTe.js";import"./Input-CoMQYpcI.js";import"./Avatar-CNmsZKUa.js";import"./AvatarGroup-CiKX_xpR.js";import"./Badge-Cz-Xpmja.js";import"./Tooltip-Ovi09slt.js";import"./Heading-DscqP9Yc.js";import"./useHighlightedText-CRKmbQjK.js";import"./ChevronUp-kw1y4I9y.js";import"./ChevronDown-n3Y6y8IU.js";import"./ChevronRight-R352om1g.js";import"./HeartFill-CP95Nmnr.js";import"./ContextMenu-C2mB4zeU.js";import"./useDropdownMenuController-XTqI9DN8.js";import"./Dropdown-CHEaMzgw.js";import"./SearchField-C_K7QMu3.js";import"./MagnifyingGlass-bfd6ClVE.js";import"./FieldBase-BU_zP5Yv.js";import"./Typography-Dy4MqSc4.js";import"./Field-BfWcyiGr.js";import"./Label-BttEpvGq.js";import"./useMenu-DY0SSfK5.js";import"./MenuListItem-miRB5bIM.js";import"./MenuListHeading-DpZURBIT.js";import"./MenuItem-CyggXvzt.js";import"./ItemMedia-DBIH2IUr.js";import"./Checkmark-y0isgIvR.js";import"./ItemLabel-DluBJ4yx.js";import"./ItemControls-ohsHtP8K.js";import"./index-nqILkJZM.js";import"./InformationSquare-B_LCnSe8.js";import"./MenuElipsisHorizontal-C9QTcmdo.js";import"./Section-CfHJUgK6.js";import"./Flex-D2KvdX5w.js";import"./ButtonGroup-D9Sva-zY.js";import"./Divider-Dx5Ajhn-.js";import"./SettingsItem-BeuHMIHB.js";import"./SettingsItemBase-Bk5ZV-QL.js";import"./ItemBase-DxSyPEoM.js";import"./ItemLink-LSrTzTCf.js";import"./SettingsModal-BEEglA2y.js";import"./ModalBody-CWm38mqT.js";import"./ButtonIcon-D9kRL-nY.js";import"./ButtonLabel-D6-xX-4X.js";import"./AccountOrganization-DsucV_uQ.js";import"./Byline-CsqAXxYk.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
