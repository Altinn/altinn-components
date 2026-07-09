import{a7 as t,c as o}from"./iframe-BZiA3Dc9.js";import{S as s}from"./Handshake-Cui2Qe8D.js";import{S as e}from"./Bell-Ca1iHeTq.js";import{S as n}from"./Hashtag-2iPkj3hW.js";import{S as p}from"./Files-oXojg682.js";import{A as l}from"./AccountListItem-Di4dBnIV.js";import{A as m}from"./AccountListItemDetails-BdRWgOwW.js";import{L as c}from"./List-DDPijhf8.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-C4FhKt55.js";import"./Input-F50qI-5v.js";import"./Avatar-DghTGFEI.js";import"./AvatarGroup-DPv09ZzM.js";import"./Badge-9d5TUG_K.js";import"./Tooltip-9A_N-nl8.js";import"./Heading-DduTyBY0.js";import"./useHighlightedText-gnIxErVs.js";import"./ChevronUp-BGK37JKw.js";import"./ChevronDown-CNxF5VIu.js";import"./ChevronRight-CRJJFvsY.js";import"./HeartFill-BEj4Jija.js";import"./ContextMenu-98Gzvt6m.js";import"./useDropdownMenuController-DhlN8Ngn.js";import"./Dropdown-B6vO-ibc.js";import"./SearchField-CjnwN1Qm.js";import"./MagnifyingGlass-CA7TYkUz.js";import"./FieldBase-ueusd3rP.js";import"./Typography-HNFVi96c.js";import"./Field-BBiYs4sk.js";import"./Label-DzltmVQl.js";import"./useMenu-S-ctNtGP.js";import"./MenuListItem-D6cNKdUH.js";import"./MenuListDivider-BVEnRF-b.js";import"./MenuListHeading-BOV_GCdf.js";import"./MenuItem-C8RiqVeE.js";import"./ItemMedia-DZA-TM72.js";import"./Checkmark-4XKWnN3Z.js";import"./ItemLabel-CJWHWa7G.js";import"./ItemControls-D3kvfvc9.js";import"./InformationSquare-mZWip9WA.js";import"./MenuElipsisHorizontal-C2yCxxi6.js";import"./Section-B5v4sxTq.js";import"./Flex-DlKNIBbG.js";import"./ButtonGroup-CQ4JbS4J.js";import"./Divider-z3aWjxga.js";import"./SettingsItem-CYOx7efS.js";import"./SettingsItemBase-B0O87-qU.js";import"./ItemBase-DgeIJNcx.js";import"./ItemLink-essyEfxP.js";import"./SettingsModal-DmpepEFy.js";import"./ModalBody-CEOKzm3S.js";import"./ButtonIcon-CMUqdBu-.js";import"./ButtonLabel-BZQLbjuh.js";import"./AccountOrganization-CjTgjfU0.js";import"./Byline-Cqm72Kmq.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
