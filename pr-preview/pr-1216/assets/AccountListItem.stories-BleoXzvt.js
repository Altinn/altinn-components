import{p as t}from"./iframe-B0raGbVc.js";import{S as a}from"./Handshake-B-wqD4Ds.js";import{S as e}from"./Bell-D1VEIBpn.js";import{S as s}from"./Hashtag-BU2eUVAT.js";import{S as n}from"./Files-Dk8XN8XA.js";import{A as p}from"./AccountListItem-C3I-UG2P.js";import{A as m}from"./AccountListItemDetails-DaXLHhaB.js";import{B as l}from"./Button-DaZ5Xj9O.js";import{L as c}from"./List-BUxiMRhB.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DjmMrSjF.js";import"./ListItem-CBFwejwW.js";import"./index-BFPoepm_.js";import"./Input-DWL065bb.js";import"./tooltip-C563LrpG.js";import"./XMark-Vu63tlKp.js";import"./Icon-CkGS8ofh.js";import"./Skeleton-Bie46BNt.js";import"./Avatar-C_p7vVVJ.js";import"./AvatarGroup-CCFl7ITU.js";import"./Badge-LVeKbEwp.js";import"./Tooltip-drcV-Psw.js";import"./Heading-HwRbtbil.js";import"./useHighlightedText-Cy927kZm.js";import"./ChevronUp-Cz4MSlUQ.js";import"./ChevronDown-CNqUwOXO.js";import"./ChevronRight-B1cS3dE4.js";import"./HeartFill--8H9FBxU.js";import"./ContextMenu-BVVWzEzP.js";import"./useDropdownMenuController-CZGIg3GD.js";import"./Dropdown-XaITxOJ1.js";import"./SearchField-x-7DN5Df.js";import"./MagnifyingGlass-M1myOHdK.js";import"./FieldBase-COYRg4qt.js";import"./Typography-aMX_Xall.js";import"./Label-BU6sA0x8.js";import"./useMenu-DBDHaupH.js";import"./MenuListItem-Cqp8gCsN.js";import"./MenuListHeading-BOiM7js_.js";import"./MenuItem-CO5pm5KV.js";import"./ItemMedia-vIK6hHXj.js";import"./Checkmark-w1Y8-xSD.js";import"./ItemLabel-WiIVldH2.js";import"./ItemControls-0LHp_bwC.js";import"./index-BdK8fp8H.js";import"./InformationSquare-C1Z5-XLz.js";import"./MenuElipsisHorizontal-1hmmtM6d.js";import"./Section-DlNTQI-0.js";import"./Flex-DAM9Vgpa.js";import"./ButtonGroup-DlKQjFoe.js";import"./Divider-B2Ff9UTl.js";import"./SettingsItem-DZE3cKJE.js";import"./SettingsItemBase-KAndVJGv.js";import"./ItemBase-BOE3ch8M.js";import"./ItemLink-CuY20mCv.js";import"./SettingsModal-CrxZUlDd.js";import"./ModalBody-Bc7rXxzI.js";import"./ButtonIcon-BDD4AILi.js";import"./ButtonLabel-C6Vo5Tgm.js";import"./AccountOrganization-D7xHhbWF.js";import"./Byline-Btf5bXOo.js";const Bt={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(c,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(l,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const It=["Default","Expanded"];export{r as Default,i as Expanded,It as __namedExportsOrder,Bt as default};
