import{a7 as t,c as o}from"./iframe-h3kpEY-8.js";import{S as s}from"./Handshake-C1zXlpBP.js";import{S as e}from"./Bell-nHOF0q22.js";import{S as n}from"./Hashtag-Dv1ManO5.js";import{S as p}from"./Files-FXb4jNiz.js";import{A as m}from"./AccountListItem-Ch8iJHdZ.js";import{A as l}from"./AccountListItemDetails-D8Ybc8aH.js";import{L as c}from"./List-BrnOjuxG.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-De57F-VP.js";import"./Input-BilJ5YTK.js";import"./Avatar-xrrnEYLD.js";import"./AvatarGroup-COWd8M-x.js";import"./Badge-DXobaynz.js";import"./Tooltip-DgP5yGn4.js";import"./Heading-Dn7fEFx7.js";import"./useHighlightedText-Lwubglq6.js";import"./ChevronUp-ChyOGEvh.js";import"./ChevronDown-lfOvIfMJ.js";import"./ChevronRight-zeeAR8pp.js";import"./HeartFill-fTOJiR6e.js";import"./ContextMenu-CoG70u__.js";import"./useDropdownMenuController-BHvOgZtq.js";import"./Dropdown-BZC5Raej.js";import"./SearchField-pLL_WmAV.js";import"./MagnifyingGlass-Df6AiRyH.js";import"./FieldBase-CnX5WdHy.js";import"./Typography-ByLPxgtz.js";import"./Field-BzJVbJyd.js";import"./Label-DRrcRV0r.js";import"./useMenu-DIh14msT.js";import"./MenuListItem-DdKH3BDS.js";import"./MenuListDivider-BDzgWude.js";import"./MenuListHeading-B8DJ5av2.js";import"./MenuItem-CJxVZTG4.js";import"./ItemMedia-DOHb0jsR.js";import"./Checkmark-qxd_V6S7.js";import"./ItemLabel-DwG1GkVg.js";import"./ItemControls-DTSXitWE.js";import"./index-BRnuOkic.js";import"./InformationSquare-TM9O4ixW.js";import"./MenuElipsisHorizontal-DBgqCiOI.js";import"./Section-CgbWqpsb.js";import"./Flex-BmiGVQGS.js";import"./ButtonGroup-CTYKvx28.js";import"./Divider-BULkqhJ0.js";import"./SettingsItem-CQv2PMhK.js";import"./SettingsItemBase-C8Rpd_nQ.js";import"./ItemBase-C2eJ02ZF.js";import"./ItemLink-CuqdYmxq.js";import"./SettingsModal-DxrZ8oAm.js";import"./ModalBody-lChWNEBC.js";import"./ButtonIcon-CkVeYQtg.js";import"./ButtonLabel-DuUqN0Cv.js";import"./AccountOrganization-BzrJ1qHp.js";import"./Byline-iQF-_OTI.js";const ut={title:"Account/AccountListItem",component:m,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const vt=["Default","Expanded"];export{r as Default,i as Expanded,vt as __namedExportsOrder,ut as default};
