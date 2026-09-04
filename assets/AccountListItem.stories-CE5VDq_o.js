import{a7 as t,c as o}from"./iframe-Bg-ykIGY.js";import{S as s}from"./Handshake-18EEJovF.js";import{S as e}from"./Bell-CzNMe-B8.js";import{S as n}from"./Hashtag-BJPPyAPm.js";import{S as p}from"./Files-R65SD84X.js";import{A as l}from"./AccountListItem-CfTZxQjT.js";import{A as m}from"./AccountListItemDetails-BvgZcU2D.js";import{L as c}from"./List-Cc9en0ov.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-TtjgHak_.js";import"./Input-DE7Whw6H.js";import"./Avatar-DcnAq-Om.js";import"./AvatarGroup-BOIk740D.js";import"./Badge-DsOcGMcG.js";import"./Tooltip-DQBCcEkE.js";import"./Heading-BKVhZ0mC.js";import"./useHighlightedText-pfd0QjZv.js";import"./ChevronUp-C-UrHs7h.js";import"./ChevronDown-30JTV7H0.js";import"./ChevronRight-BubW3AYp.js";import"./HeartFill-CtlcHBEb.js";import"./ContextMenu-55s2ID-Y.js";import"./useDropdownMenuController-Bq5ui6IL.js";import"./Dropdown-BqiaInOV.js";import"./SearchField-BC3zApJG.js";import"./MagnifyingGlass-D8mkQKeK.js";import"./FieldBase-DJSWyb1T.js";import"./Typography-DBpPrukr.js";import"./Field-CtkuJ2u8.js";import"./Label-Bd0qu7F0.js";import"./useMenu-TQu19WT_.js";import"./MenuListItem-mJ40Xt43.js";import"./MenuListDivider-SxHGHgdX.js";import"./MenuListHeading-CGdgP7xn.js";import"./MenuItem-Do53kNn7.js";import"./ItemMedia-CbKN8wGb.js";import"./Checkmark-DLRr0XeX.js";import"./ItemLabel-C7izt9pc.js";import"./ItemControls-ChQuM1Jl.js";import"./InformationSquare-CVG9J0Nh.js";import"./MenuElipsisHorizontal-vrQ73KRy.js";import"./Section-3Ay22gMM.js";import"./Flex-BQ7Sfa4Q.js";import"./ButtonGroup-D3TFK-sP.js";import"./Divider-i4XKetPt.js";import"./SettingsItem-BnyazG-P.js";import"./SettingsItemBase-DbC3k_m0.js";import"./ItemBase-oVSLgwcy.js";import"./ItemLink-D1jwa25l.js";import"./SettingsModal-DoDAcvH9.js";import"./ModalBody-9RwRyUWe.js";import"./ButtonIcon-BN0vPuAv.js";import"./ButtonLabel-DGmLIPRz.js";import"./AccountOrganization-B4qyZGWq.js";import"./Byline-CBCSzTOX.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
