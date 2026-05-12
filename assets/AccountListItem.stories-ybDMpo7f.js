import{j as t}from"./iframe-BUZW8AMM.js";import{S as a}from"./Handshake-D7kMbH5C.js";import{S as e}from"./Bell-CInWcKsn.js";import{S as s}from"./Hashtag-QBvqcxIc.js";import{S as n}from"./Files-CtoSf7Bu.js";import{A as p}from"./AccountListItem-B5wQ6Byo.js";import{L as m}from"./List-C59qtuov.js";import{A as l}from"./AccountListItemDetails-Cfdj8NF4.js";import{B as c}from"./Button-gpqpzK6E.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CoMggIDA.js";import"./ListItem-DqPqNTbx.js";import"./index-DDG5Qp_D.js";import"./Input-xWxScOYP.js";import"./input-Dl9c_xvZ.js";import"./lite-DaUVFjkg.js";import"./XMark-N_5CtkVA.js";import"./Icon-pO_LYxKU.js";import"./Skeleton-2WT-jYKy.js";import"./Avatar-VmI9f2FC.js";import"./AvatarGroup-BSpRcNGO.js";import"./Badge-CcUYqUUV.js";import"./Tooltip-4HkvDlDY.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-Cq-TarIz.js";import"./Heading-BBJzhiZm.js";import"./useHighlightedText-Df1F8nSN.js";import"./ChevronUp-Cmvg9ZuE.js";import"./ChevronDown-C7e7c8oq.js";import"./ChevronRight-Be2F8dIE.js";import"./HeartFill-swP0PXTG.js";import"./ContextMenu-DWxhfZ1J.js";import"./useDropdownMenuController-ocgtyANg.js";import"./Dropdown-B9D2leTq.js";import"./MenuElipsisHorizontal-Dq6dZaad.js";import"./SearchField-DOgIBcSC.js";import"./MagnifyingGlass-e5Ddvpo2.js";import"./FieldBase-D0VPfoZq.js";import"./Typography-DPxU9lqg.js";import"./Label-EV3PcI6g.js";import"./index-BxrYGQ_D.js";import"./MenuListItem-DOB3vVPI.js";import"./MenuListHeading-BbGKJ44d.js";import"./MenuItem-B9Qpze_W.js";import"./ItemMedia-lV46z_8W.js";import"./Checkmark-B1cvuYYq.js";import"./ItemControls-CILw3fe6.js";import"./useMenu-DzfOGhde.js";import"./index-B1N1jCNu.js";import"./InformationSquare-D87nn8LZ.js";import"./Flex-ErkwFvdj.js";import"./Section-DQEzrtai.js";import"./ButtonGroup-BdRMlEte.js";import"./Divider-oEZeoRWI.js";import"./SettingsItem-B6dEFvOZ.js";import"./SettingsItemBase-DZ_I7vZA.js";import"./ItemLink-pH7m12-R.js";import"./SettingsModal-2DOGG5hN.js";import"./ModalBody-BtJGyYre.js";import"./ButtonIcon-DbIrT_gT.js";import"./ButtonLabel-CQvjwTEk.js";import"./AccountOrganization-TvXO2dD2.js";import"./Byline-C-BCQ4Rh.js";import"./button-Bzfkec0d.js";const ft={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(m,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const St=["Default","Expanded"];export{r as Default,i as Expanded,St as __namedExportsOrder,ft as default};
