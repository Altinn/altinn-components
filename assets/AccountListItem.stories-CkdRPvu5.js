import{a7 as t,c as o}from"./iframe-pmb13xcr.js";import{S as s}from"./Handshake-Czmqf2Wm.js";import{S as e}from"./Bell-Cm123EEK.js";import{S as n}from"./Hashtag-BSvI2l6x.js";import{S as p}from"./Files-f2SbFh9e.js";import{A as l}from"./AccountListItem-DVgy5ZMG.js";import{A as m}from"./AccountListItemDetails-Dsl9qTlB.js";import{L as c}from"./List-7Zz6NyrJ.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-DeYVBNax.js";import"./Input-CJNvWYoB.js";import"./Avatar-DgFMZdvt.js";import"./AvatarGroup-C5Tz0kQR.js";import"./Badge-CDoJNvMh.js";import"./Tooltip-BV9R0mmr.js";import"./Heading-sU40TroH.js";import"./useHighlightedText-By0gZF-u.js";import"./ChevronUp-DD3z1ZBF.js";import"./ChevronDown-7NsihGJj.js";import"./ChevronRight-BcL3woie.js";import"./HeartFill-Ddbc5KTD.js";import"./ContextMenu-CkaQH0Em.js";import"./useDropdownMenuController-CLuQSoQG.js";import"./Dropdown-BPuWmM11.js";import"./SearchField-xzT30cQx.js";import"./MagnifyingGlass-HRL7caCa.js";import"./FieldBase-DlkZCCjW.js";import"./Typography-BgUhg-DC.js";import"./Field-Dm0MSPIi.js";import"./Label-CxwvdH9w.js";import"./useMenu-PFiIjJ-b.js";import"./MenuListItem-DW-1hJGg.js";import"./MenuListHeading-B2QtO_LB.js";import"./MenuItem-D_bFc04X.js";import"./ItemMedia-BGgA1RRu.js";import"./Checkmark-Cm7hyVD6.js";import"./ItemLabel-0x089RNk.js";import"./ItemControls-CCuuzoug.js";import"./index-B1Y0FrCw.js";import"./InformationSquare-Bin60tyG.js";import"./MenuElipsisHorizontal-BdVaNuRc.js";import"./Section-0UMzqVbn.js";import"./Flex-Bo48iBpz.js";import"./ButtonGroup-DvNffpdA.js";import"./Divider-LyAC-Ayz.js";import"./SettingsItem-Cqgymd4o.js";import"./SettingsItemBase-D-tF3fsW.js";import"./ItemBase-DNBWN9Yd.js";import"./ItemLink-B34a5swl.js";import"./SettingsModal-DDb7WpLZ.js";import"./ModalBody-CU8fQCap.js";import"./ButtonIcon-B4tRqIle.js";import"./ButtonLabel-BbcEgvaI.js";import"./AccountOrganization-DSXZfnjM.js";import"./Byline-BOyDTWco.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
