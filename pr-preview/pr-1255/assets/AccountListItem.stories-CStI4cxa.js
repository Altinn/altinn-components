import{a7 as t,c as o}from"./iframe-DH0sUlof.js";import{S as s}from"./Handshake-dX4K2i1b.js";import{S as e}from"./Bell-DQ1Q2f70.js";import{S as n}from"./Hashtag-PrkKv0ul.js";import{S as p}from"./Files-BV4qwchj.js";import{A as l}from"./AccountListItem-DBUlokSs.js";import{A as m}from"./AccountListItemDetails-BpGgkgVi.js";import{L as c}from"./List-Cm-mvG7i.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-B0cRuGOu.js";import"./Input-CNoKo11u.js";import"./Avatar-FXELAR9V.js";import"./AvatarGroup-CNi2rl48.js";import"./Badge-DYSW2mf5.js";import"./Tooltip-2QW0kgPy.js";import"./Heading-CPu50xm5.js";import"./useHighlightedText-DycG_gS6.js";import"./ChevronUp-B3owS6FK.js";import"./ChevronDown-CrGho0Pn.js";import"./ChevronRight-CNDn15vN.js";import"./HeartFill-Bj9iB8KO.js";import"./ContextMenu-DRV4f9iJ.js";import"./useDropdownMenuController-D_CHcGp2.js";import"./Dropdown-CKpYPgFT.js";import"./SearchField-CPfjDOA9.js";import"./MagnifyingGlass-C4sPwF1v.js";import"./FieldBase-DCz4GC6j.js";import"./Typography-PtbhQdVx.js";import"./Field-CxaznmxG.js";import"./Label-Cf0ApS2G.js";import"./useMenu-CPWn58Ca.js";import"./MenuListItem-DWDx0q1Y.js";import"./MenuListHeading-DWFD_r7c.js";import"./MenuItem-BT1jodiz.js";import"./ItemMedia-BGZXzift.js";import"./Checkmark-BQvK_vH6.js";import"./ItemLabel-BN4HDeMP.js";import"./ItemControls-BwbZayit.js";import"./index-DEktyI50.js";import"./InformationSquare-DDlxGHn9.js";import"./MenuElipsisHorizontal-aeLtgluJ.js";import"./Section-DMcOoGW4.js";import"./Flex-D6bQl7-N.js";import"./ButtonGroup-0Z_3vx9e.js";import"./Divider-vXDeR0m7.js";import"./SettingsItem-D2OyLpSW.js";import"./SettingsItemBase-BJki3aQX.js";import"./ItemBase-1sT4ul5N.js";import"./ItemLink-D0iXhSOF.js";import"./SettingsModal-Cd5h6AtQ.js";import"./ModalBody-Bsp1GUDI.js";import"./ButtonIcon-CUIrIkpy.js";import"./ButtonLabel-BhcL_izL.js";import"./AccountOrganization-BdiGCRtM.js";import"./Byline-DXHjbIjw.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
