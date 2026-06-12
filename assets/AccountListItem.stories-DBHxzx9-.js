import{a7 as t,c as o}from"./iframe-DWR_BPge.js";import{S as s}from"./Handshake-BOGIVlbi.js";import{S as e}from"./Bell-CNwaOF5z.js";import{S as n}from"./Hashtag-DF_lmshc.js";import{S as p}from"./Files-DX1M06Ks.js";import{A as l}from"./AccountListItem-BVtb_7bW.js";import{A as m}from"./AccountListItemDetails-CcMdJDpb.js";import{L as c}from"./List-CSRccNVp.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-DKhaVzxg.js";import"./Input-_0Vw9ldu.js";import"./Avatar-Cok-GZxK.js";import"./AvatarGroup-CXLQt8Ir.js";import"./Badge-DkIfMZHe.js";import"./Tooltip-DTF1wjLo.js";import"./Heading-DZv3ITVf.js";import"./useHighlightedText-CxSGKcWS.js";import"./ChevronUp-B_nN6-rE.js";import"./ChevronDown-DyMHpH4k.js";import"./ChevronRight-Byhvri5k.js";import"./HeartFill-fRtY9Ved.js";import"./ContextMenu-DE4xWtGE.js";import"./useDropdownMenuController-CeHTZ23v.js";import"./Dropdown-DtgTj7aV.js";import"./SearchField-MQHHZ8_3.js";import"./MagnifyingGlass-G_PIqG58.js";import"./FieldBase-BMAVe4Iy.js";import"./Typography-Ck9DnhQz.js";import"./Field-Ck35a6Qp.js";import"./Label-BsbeMro6.js";import"./useMenu-D6mVZHWX.js";import"./MenuListItem-fkd7gaum.js";import"./MenuListHeading-CnnWm4Yf.js";import"./MenuItem-hCzlas21.js";import"./ItemMedia-CNbHl28k.js";import"./Checkmark-DJ-994GJ.js";import"./ItemLabel-D6TsLy-F.js";import"./ItemControls-BuEVWR3X.js";import"./index-Cf984nsL.js";import"./InformationSquare-DScDoZl7.js";import"./MenuElipsisHorizontal-DiWRRmpM.js";import"./Section-BCFzX2B1.js";import"./Flex-6ZJb0CGr.js";import"./ButtonGroup-BQ7wgDtN.js";import"./Divider-Dr2O11m-.js";import"./SettingsItem-BaQWAhOp.js";import"./SettingsItemBase-ucDTJ2CS.js";import"./ItemBase-Cw7jbG4w.js";import"./ItemLink-DjqXhCHd.js";import"./SettingsModal-B9paxYpJ.js";import"./ModalBody-TFV96CG9.js";import"./ButtonIcon-CMheF9Lh.js";import"./ButtonLabel-VQkVwOaH.js";import"./AccountOrganization-Dr6t61ya.js";import"./Byline-CHZhg7wc.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
