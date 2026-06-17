import{a7 as t,c as o}from"./iframe-CGVyzYP6.js";import{S as s}from"./Handshake-CdEIttsj.js";import{S as e}from"./Bell-irJ1mivQ.js";import{S as n}from"./Hashtag-DRMdtWOT.js";import{S as p}from"./Files-DY2kjg33.js";import{A as l}from"./AccountListItem-D_WZXuqa.js";import{A as m}from"./AccountListItemDetails-CNIYLpmi.js";import{L as c}from"./List-BAuWcqgT.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-ZS3MR4kD.js";import"./Input-ChwQfPxo.js";import"./Avatar-DDHY9yxs.js";import"./AvatarGroup-B_UwXOMR.js";import"./Badge-DjC88ORp.js";import"./Tooltip-BCyYy-oX.js";import"./Heading-EfRG8byd.js";import"./useHighlightedText-Bh9EAdhA.js";import"./ChevronUp-C5-b6A0s.js";import"./ChevronDown-BnuaQ1Jn.js";import"./ChevronRight-_qaR5Ukf.js";import"./HeartFill-kqtABC7b.js";import"./ContextMenu-6V2WGQT0.js";import"./useDropdownMenuController-_RUVZb-i.js";import"./Dropdown-85NQ92f7.js";import"./SearchField-Dki50BLg.js";import"./MagnifyingGlass-Vm5pwk0c.js";import"./FieldBase-CPq342qa.js";import"./Typography-CpGYIokR.js";import"./Field-D0ZvmoXg.js";import"./Label-Cy3PFObt.js";import"./useMenu-DakKUenW.js";import"./MenuListItem-BZZ7Na45.js";import"./MenuListDivider-rcUBnQ13.js";import"./MenuListHeading-Dp87R0C9.js";import"./MenuItem-D-GQTJGG.js";import"./ItemMedia-DPok0_Uu.js";import"./Checkmark-pskdQzRC.js";import"./ItemLabel-C1oepsPk.js";import"./ItemControls-DA3hAeY8.js";import"./InformationSquare-CCTfPPnt.js";import"./MenuElipsisHorizontal-V5cJLUxq.js";import"./Section-Dto-LHOR.js";import"./Flex-Ba3off4t.js";import"./ButtonGroup-C56yvq46.js";import"./Divider-vDXY4oCB.js";import"./SettingsItem-B_oG0ro-.js";import"./SettingsItemBase-D_jhxmpU.js";import"./ItemBase-Czu03lhj.js";import"./ItemLink-BK6jfXpZ.js";import"./SettingsModal-D6JNoI1O.js";import"./ModalBody-BShtfl0N.js";import"./ButtonIcon-DxwlIUls.js";import"./ButtonLabel-Cv6t8WFf.js";import"./AccountOrganization-DBTKog-x.js";import"./Byline-Bm2t7DwV.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
